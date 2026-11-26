using beven.wedding.functions.Infrastructure;
using FluentValidation;
using JetBrains.Annotations;

namespace beven.wedding.functions.Domain.PasscodeRequest;

[UsedImplicitly]
public class PasscodeRequestDtoValidator : AbstractValidator<PasscodeRequestDto>
{
    public PasscodeRequestDtoValidator()
    {
        RuleFor(static r => r.FirstName)
            .NotEmpty()
            .WithMessage("First name cannot be a empty string")
            .Matches(Constants.OnlyAlphanumericCharactersRegex)
            .WithMessage("First name  may only contain alphanumeric characters");
        
        RuleFor(static r => r.LastName)
            .NotEmpty()
            .WithMessage("Last name cannot be a empty string")
            .Matches(Constants.OnlyAlphanumericCharactersRegex)
            .WithMessage("Last name  may only contain alphanumeric characters");
    }
}