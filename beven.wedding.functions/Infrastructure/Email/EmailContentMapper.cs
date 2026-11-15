using Azure.Communication.Email;
using beven.wedding.functions.Domain.Person;
using beven.wedding.functions.Infrastructure.Email.Options;

namespace beven.wedding.functions.Infrastructure.Email;

public class EmailContentMapper(EmailOptions options)
{
    public EmailMessage CreatePasscodeEmailMessage(/*PersonData data*/)
    {
        var content =
            options.PasscodeRequestEmailContent.HtmlBody.Replace(
                options.PasscodeRequestEmailContent.PasscodePlaceholder, "FAKE PASSCODE");

        var emailContent = new EmailContent("super cool subjct");
        emailContent.PlainText = content;
        var email = new EmailMessage(options.Sender, "an email", emailContent);
        
        return email;
    }
}