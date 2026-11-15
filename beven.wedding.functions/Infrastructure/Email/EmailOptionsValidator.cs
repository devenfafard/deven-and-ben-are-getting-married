using beven.wedding.functions.Infrastructure.Email.Options;
using FluentValidation;
using JetBrains.Annotations;

namespace beven.wedding.functions.Infrastructure.Email;

[UsedImplicitly]
public class EmailOptionsValidator : AbstractValidator<EmailOptions>
{
    public EmailOptionsValidator()
    {
        RuleFor(static o => o.ConnectionString).NotEmpty();
        
        RuleFor(static o => o.Sender)
            .NotEmpty()
            .EmailAddress();

        RuleFor(static e => !e.PasscodeRequestEmailContent.IsNullObject);
        RuleFor(static e => e.PasscodeRequestEmailContent.Subject).NotEmpty();
        RuleFor(static e => e.PasscodeRequestEmailContent.HtmlBody).NotEmpty();
        RuleFor(static e => e.PasscodeRequestEmailContent.PasscodePlaceholder).NotEmpty();
    }
}