var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ⚠️ TEST: SonarQube için bilerek eklenen hatalar
string unusedVariable = "Bu değişken hiçbir yerde kullanılmıyor"; // Unused Variable (Code Smell)
string hardcodedPassword = "AdminPassword123!"; // Hardcoded Credentials (Security Hotspot)

app.MapGet("/", () => "AuthService is Running!");

app.Run();