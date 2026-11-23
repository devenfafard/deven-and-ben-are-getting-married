using beven.wedding.functions.Infrastructure;

namespace beven.wedding.functions.Domain.PasscodeRequest;

public class PasscodeRequestDto
{
    public required string FirstName { get; init; } = Constants.INVALID_STRING;
    public required string LastName  { get; init; }  = Constants.INVALID_STRING;
}