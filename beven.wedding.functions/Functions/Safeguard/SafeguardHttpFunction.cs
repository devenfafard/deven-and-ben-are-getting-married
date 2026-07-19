using System.Net;
using System.Text.Json;
using beven.wedding.functions.Infrastructure;
using beven.wedding.functions.Infrastructure.Api;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace beven.wedding.functions.Functions.Safeguard;

public class SafeguardHttpFunction(ILogger<SafeguardHttpFunction> logger, SafeguardDtoValidator validator)
    : BaseController
{
    [Function(nameof(SafeguardHttpFunction))]
    public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, WebRequestMethods.Http.Get, Route = nameof(Safeguard))]
        HttpRequestData request)
    {
        using var memoryStream = new MemoryStream();
        
        await request.Body.CopyToAsync(memoryStream);

        memoryStream.Position = Constants.START_OF_STREAM;

        var deserializedSafeguardDto = await JsonSerializer.DeserializeAsync<SafeguardDto>(memoryStream);

        if (deserializedSafeguardDto is null)
        {
            logger.LogWarning(Constants.NO_SAFEGUARD_MESSAGE);
            
            return BadRequestResponse([Constants.NO_SAFEGUARD_MESSAGE]);
        }

        var validationResult = await validator.ValidateAsync(deserializedSafeguardDto);

        if (validationResult.IsValid is false)
        {
            return BadRequestResponse(validationResult.Errors.Select(static e => e.ErrorMessage));
        }

        return OkResponse("the thing workded!");
    }
}