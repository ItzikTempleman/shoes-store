class AppConfig {
    public readonly employeesUrl = "http://localhost:3030/api/employees/";
    public readonly suppliersUrl = "http://localhost:3030/api/suppliers/";
    public readonly productsUrl = "http://localhost:3030/api/products/";

    public readonly registerUrl = "http://localhost:3030/api/register/";
    public readonly loginUrl="http://localhost:3030/api/login/";

}

export const appConfig = new AppConfig();

