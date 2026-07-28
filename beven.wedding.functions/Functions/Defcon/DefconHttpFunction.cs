using System.Net;
using System.Text.Json;
using beven.wedding.functions.Domain.Person;
using beven.wedding.functions.Domain.Safeguard;
using beven.wedding.functions.Infrastructure;
using beven.wedding.functions.Infrastructure.Api;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace beven.wedding.functions.Functions.Defcon;

public class DefconHttpFunction(ILogger<DefconHttpFunction> logger, 
                                SafeguardDtoValidator validator,
                                PersonRepository repository)
    : BaseController
{
    [Function(nameof(DefconHttpFunction))]
    public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, WebRequestMethods.Http.Get, Route = nameof(Defcon))]
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

        var people = await repository.GetPeopleInGroupAsync(deserializedSafeguardDto.Data);
        var xxx = people.Select(p => p.DefconLevel).First();

        return OkResponse(xxx);
    }
}