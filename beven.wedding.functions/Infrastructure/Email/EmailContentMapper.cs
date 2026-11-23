using Azure.Communication.Email;
using beven.wedding.functions.Domain.Person;
using beven.wedding.functions.Infrastructure.Email.Options;

namespace beven.wedding.functions.Infrastructure.Email;

public class EmailContentMapper(EmailOptions options)
{
    public EmailMessage CreatePasscodeEmailMessage(PersonData data)
    {
        var plainTextBody =
            options.PasscodeRequestEmailContent.PlainTextBody
                .Replace(options.PasscodeRequestEmailContent.PasscodePlaceholder, data.GroupAlias)
                .Replace(options.PasscodeRequestEmailContent.FirstNamePlaceholder, data.FirstName);

        var htmlBody = options.PasscodeRequestEmailContent.HtmlBody
            .Replace(options.PasscodeRequestEmailContent.PasscodePlaceholder, data.GroupAlias)
            .Replace(options.PasscodeRequestEmailContent.FirstNamePlaceholder, data.FirstName);

        var emailContent = new EmailContent(options.PasscodeRequestEmailContent.Subject)
        {
            Html = htmlBody,
            PlainText = plainTextBody
        };

        var email = new EmailMessage(options.Sender, data.EmailAddress, emailContent);

        return email;
    }
}