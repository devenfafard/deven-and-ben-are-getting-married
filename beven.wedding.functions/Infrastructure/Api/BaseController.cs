using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace beven.wedding.functions.Infrastructure.Api;

public class BaseController: ControllerBase
{
    private protected IActionResult OkResponse() => Ok(ApiResponse<NullApiData>.WithNullData());
    
    private protected IActionResult OkResponse<T>(T data) => Ok(ApiResponse<T>.WithData(data));
    
    private protected IActionResult BadRequestResponse(IEnumerable<string> errors) =>
        BadRequest(ApiResponse<NullApiData>.WithStatusCodeAndErrors(HttpStatusCode.BadRequest, errors));
}