using Azure;
using Azure.Communication.Email;
using beven.wedding.functions.Infrastructure.Email.Options;

namespace beven.wedding.functions.Infrastructure.Email;

public class EmailOperationClient(EmailOptions options)
{
    public async Task<EmailSendOperation> SendAsync(EmailMessage message)
    {
        var client = GetClient();

        var operation = await client.SendAsync(WaitUntil.Completed, message);

        return operation;
    }

    private EmailClient GetClient() => new(options.ConnectionString);
}