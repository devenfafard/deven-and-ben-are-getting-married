using System.Net;
using System.Text.Json.Serialization;

namespace beven.wedding.functions.Infrastructure.Api;

public class ApiResponse<T>
{
    [JsonConstructor]
    public ApiResponse()
    {
        // Used for deserialization.
    }

    public HttpStatusCode ResponseCode { get; init; } = HttpStatusCode.OK;
    
    // Data returned by the request
    public T? Data { get; init; }

    public static ApiResponse<T> WithNullData() => new();
    
    public static ApiResponse<T> WithData(T data) => new()
    {
        Data = data
    };
    
    // Errors
    public IEnumerable<string> Errors { get; init; } = Constants.InvalidStringEnumerable;
    
    public static ApiResponse<T> WithStatusCodeAndErrors(HttpStatusCode code, IEnumerable<string> errors) => new()
    {
        ResponseCode = code,
        Errors = errors
    };
}