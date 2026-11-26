using System.Text.Json.Serialization;
using beven.wedding.functions.Infrastructure.Common;

namespace beven.wedding.functions.Infrastructure.Email.Data;

public class EmailAddressData : INullableObject
{
    public string DisplayName { get; init; } = Constants.INVALID_STRING;
    public string EmailAddress { get; init; } = Constants.INVALID_STRING;

    public bool IsNullObject { get; private init; }

    [JsonIgnore]
    public static EmailAddressData NullObject { get; } = new() { IsNullObject = false };
}