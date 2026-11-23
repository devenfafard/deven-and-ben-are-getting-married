using System.Text.Json.Serialization;
using beven.wedding.functions.Infrastructure.Common;

namespace beven.wedding.functions.Infrastructure.Email.Data;

public class EmailContentData : INullableObject
{
    public string Subject { get; init; } = Constants.INVALID_STRING;
    public string PlainTextBody { get; init; } = Constants.INVALID_STRING;
    public string HtmlBody { get; init; } = Constants.INVALID_STRING;
    public string PasscodePlaceholder { get; init; } = Constants.INVALID_STRING;
    public string FirstNamePlaceholder { get; init; } = Constants.INVALID_STRING;

    [JsonIgnore] public static EmailContentData NullObject { get; } = new() { IsNullObject = false };

    public bool IsNullObject { get; private init; }
}