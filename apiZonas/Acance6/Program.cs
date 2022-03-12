var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

var zonas = new List<Zonas>
{
    new Zonas{Id = 1, Name = "Botadero 1", Location = "Lopez Mateo", Time = "6:00 pm a 5:00 am", State = true},
    new Zonas{Id = 2, Name = "Frente torre", Location = "Lopez Mateo", Time = "6:00 pm a 5:00 am",State = true},
    new Zonas{Id = 3, Name = "Triaangulo", Location = "San Martín", Time = "6:00 pm a 5:00 am",State = true},
    new Zonas{Id = 4, Name = "Frente escuela", Location = "San Martín", Time = "6:00 pm a 5:00 am",State = true},
    new Zonas{Id = 5, Name = "Frente iglesia", Location = "Lopez Mateo", Time = "6:00 pm a 5:00 am",State = true},
    new Zonas{Id = 6, Name = "Guindo", Location = "San Sebastiá", Time = "6:00 pm a 5:00 am",State = true},
};

app.MapGet("/", () => zonas);

app.MapGet("/{id:int}", (int id) => zonas.Find(zona => zona.Id == id));

app.MapPost("/", (Zonas zona) =>
{
    int id = zonas.MaxBy(zona => zona.Id).Id + 1;
    zona = zona with { Id = id };
    zonas.Add(zona);
    return zona.Id;
});

app.Run();

record Zonas
{
    public int Id { get; init; }
    public string? Name { get; init; }
    public string? Location { get; init; }

    public string? Time { get; init; }

    public bool State { get; init; }
}