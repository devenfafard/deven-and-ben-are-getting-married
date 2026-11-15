using beven.wedding.functions.Infrastructure.Email.Data;

namespace beven.wedding.functions.Infrastructure.Email.Options;

public class EmailOptions
{
    public string ConnectionString { get; init; } = Constants.INVALID_STRING;
    public string Sender { get; init; } = Constants.INVALID_STRING;
    public EmailContentData PasscodeRequestEmailContent { get; init; } = EmailContentData.NullObject;
}