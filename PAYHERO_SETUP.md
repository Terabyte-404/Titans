# PayHero Payment Integration Setup Guide

This guide will help you set up PayHero payment integration for TITANSPORTS.

## Overview

PayHero is a payment gateway that allows you to accept payments from various methods including M-Pesa, Visa, Mastercard, and other payment options. This integration provides a seamless payment experience for your customers.

## Prerequisites

- PayHero merchant account
- API credentials (API Key and Merchant ID)
- Node.js environment
- SQLite database setup

## Environment Variables

Create a `.env` file in your project root and add the following PayHero environment variables:

```env
# PayHero Configuration
PAYHERO_API_KEY=your_payhero_api_key_here
PAYHERO_MERCHANT_ID=your_merchant_id_here
PAYHERO_ENVIRONMENT=sandbox  # Change to 'production' for live payments
PAYHERO_CALLBACK_URL=http://localhost:3000/payhero/callback
PAYHERO_FRONTEND_URL=http://localhost:3000
```

### Environment Variables Explanation

- `PAYHERO_API_KEY`: Your PayHero API key for authentication
- `PAYHERO_MERCHANT_ID`: Your unique merchant ID from PayHero
- `PAYHERO_ENVIRONMENT`: Set to 'sandbox' for testing, 'production' for live payments
- `PAYHERO_CALLBACK_URL`: The URL where PayHero will send payment status updates
- `PAYHERO_FRONTEND_URL`: Your frontend URL for redirecting users after payment

## Getting PayHero Credentials

1. **Sign up for PayHero**: Visit [https://payhero.co.ke](https://payhero.co.ke) and create a merchant account
2. **Complete verification**: Provide required business documentation
3. **Get API credentials**: Once approved, you'll receive:
   - API Key
   - Merchant ID
4. **Test in sandbox**: Use sandbox environment to test payments before going live

## Installation

The PayHero integration is already included in your project. The following files handle the integration:

- `js/payheroPayment.js` - Frontend payment logic
- `server.js` - Backend API endpoints for PayHero

## API Endpoints

### 1. Initiate Payment
**Endpoint**: `POST /api/payhero/initiate`

**Request Body**:
```json
{
  "phoneNumber": "254712345678",
  "amount": 1500,
  "cartItems": [...]
}
```

**Response**:
```json
{
  "success": true,
  "checkoutRequestID": "PAY-1234567890-abc123",
  "merchantRequestID": "MRCH-1234567890-xyz789",
  "message": "Payment initiated successfully"
}
```

### 2. Payment Callback
**Endpoint**: `POST /payhero/callback`

PayHero will call this endpoint to notify you about payment status changes.

**Request Body**:
```json
{
  "checkout_request_id": "PAY-1234567890-abc123",
  "merchant_request_id": "MRCH-1234567890-xyz789",
  "status": "success",
  "result_code": "0",
  "result_desc": "Payment successful",
  "transaction_id": "TXN123456789",
  "amount": 1500,
  "phone_number": "254712345678"
}
```

### 3. Query Transaction Status
**Endpoint**: `GET /api/payhero/status/:checkoutRequestID`

**Response**:
```json
{
  "status": "completed",
  "result_code": "0",
  "result_desc": "Payment successful",
  "transaction_id": "TXN123456789",
  "merchant_request_id": "MRCH-1234567890-xyz789",
  "checkout_request_id": "PAY-1234567890-abc123"
}
```

## Phone Number Format

PayHero expects phone numbers in the format: `254XXXXXXXXX`

Example:
- Correct: `254712345678`
- Incorrect: `0712345678` or `+254712345678`

The frontend automatically formats phone numbers to the correct format.

## Payment Flow

1. **Customer initiates payment**: Customer clicks "Pay with PayHero" button
2. **Phone number input**: Customer enters their phone number
3. **Payment initiation**: System sends payment request to PayHero
4. **Customer confirmation**: Customer receives payment prompt on their phone
5. **Payment completion**: Customer enters PIN to complete payment
6. **Callback notification**: PayHero sends payment status to callback URL
7. **Status update**: System updates transaction status in database
8. **Order confirmation**: Customer receives order confirmation

## Testing in Sandbox

1. Set `PAYHERO_ENVIRONMENT=sandbox` in your `.env` file
2. Use sandbox API credentials from PayHero
3. Test with small amounts (KSH 1-10)
4. Verify callback URL is accessible from PayHero servers
5. Check transaction status in database after payment

## Going Live

1. **Update environment variables**:
   ```env
   PAYHERO_ENVIRONMENT=production
   PAYHERO_API_KEY=your_production_api_key
   PAYHERO_MERCHANT_ID=your_production_merchant_id
   PAYHERO_CALLBACK_URL=https://yourdomain.com/payhero/callback
   PAYHERO_FRONTEND_URL=https://yourdomain.com
   ```

2. **Test production credentials**: Make a small test payment
3. **Monitor transactions**: Check database for successful payments
4. **Set up webhooks**: Ensure your callback URL is publicly accessible
5. **Enable IP validation**: Configure webhook security for production

## Security Considerations

1. **API Key Security**: Never commit API keys to version control
2. **Webhook Validation**: Validate callback requests from PayHero
3. **IP Whitelisting**: Configure IP validation for webhook endpoints
4. **HTTPS**: Always use HTTPS for production callback URLs
5. **Rate Limiting**: API endpoints have rate limiting configured
6. **Payload Sanitization**: All webhook payloads are sanitized

## Troubleshooting

### Payment Initiation Fails

**Problem**: Payment initiation returns error
**Solutions**:
- Check API key and merchant ID are correct
- Verify phone number format (254XXXXXXXXX)
- Ensure amount is within valid range (1-150,000 KSH)
- Check network connectivity to PayHero API

### Callback Not Received

**Problem**: Payment completes but callback not received
**Solutions**:
- Verify callback URL is publicly accessible
- Check firewall allows PayHero server IPs
- Review server logs for callback attempts
- Test callback URL with tools like webhook.site

### Transaction Status Pending

**Problem**: Transaction remains in pending status
**Solutions**:
- Customer may not have completed payment on phone
- Wait for timeout (60 seconds)
- Manually query transaction status using API
- Check PayHero dashboard for transaction details

### Invalid Phone Number Error

**Problem**: Phone number validation fails
**Solutions**:
- Ensure phone number starts with 254
- Remove country code prefix (+)
- Remove spaces and special characters
- Phone number should be 12 digits total

## Database Schema

The integration uses the following database table for transactions:

```sql
CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    transaction_id TEXT UNIQUE,
    checkout_request_id TEXT UNIQUE,
    merchant_request_id TEXT,
    phone_number TEXT,
    amount REAL,
    status TEXT, -- pending, completed, failed
    result_code TEXT,
    result_desc TEXT,
    mpesa_receipt_number TEXT,
    callback_metadata TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Monitoring and Logging

The system logs all payment-related activities:

- Payment initiation attempts
- Callback receipts
- Transaction status updates
- API errors and failures

Logs are stored in the `logs` directory.

## Support

For PayHero-specific issues:
- Email: support@payhero.co.ke
- Phone: +254 XXX XXX XXX
- Documentation: https://docs.payhero.co.ke

For integration issues:
- Check server logs in `logs/` directory
- Review database transactions table
- Verify environment variables are set correctly

## Rate Limits

The following rate limits are configured:

- Payment initiation: 5 requests per minute per IP
- Transaction status query: 10 requests per minute per IP
- Callback endpoint: No rate limiting (but IP validated)

## Webhook Security

Production environment includes webhook security:

- IP validation: Only accepts requests from PayHero servers
- Payload validation: Ensures valid JSON structure
- Payload sanitization: Removes potentially harmful content

## Changelog

### Version 1.0.0 (Current)
- Initial PayHero integration
- Payment initiation endpoint
- Callback handling
- Transaction status query
- Sandbox and production support
