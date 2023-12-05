# Resource Management App

This Angular application demonstrates basic login functionality and resource listing. Your task is to integrate API endpoints for authentication and fetching resource details.

## Getting Started

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (Version 12.x or higher)
- [Angular CLI](https://angular.io/cli) (Version 11.x or higher)

### Installation

1. Clone the repository:
   git clone [https://github.com/ppsdang/angular-api-challenge](https://github.com/ppsdang/angular-api-challenge)
2. Navigate to the project directory:
   cd angular-api-challenge
3. Install the necessary packages:
   npm install
4. Run the development server:
   npm start
The application will be available at http://localhost:4200/.

## Tasks

1. **Complete the Authentication Service:**
Implement the `login` method in `auth.service.ts` to integrate with Reqres API for user authentication. Use the following endpoint for login:
- Login API: https://reqres.in/api/login

2. **Implement Resource Listing and Detail Fetching:**
- In `resource.service.ts`, complete methods to fetch a list of resources and details of a specific resource from Reqres API. Use these endpoints:
  - Resources List API: https://reqres.in/api/resources
  - Resource Detail API: https://reqres.in/api/resource/{:id}

3. **Enhance the Resource Detail View:**
Enhance `resource-detail.component.ts` and its template to display fetched resource details effectively.

4. **Bonus Tasks:**
- Implement error handling for API requests.
- Add loading indicators while data is being fetched.

For detailed API documentation, please visit [Reqres](https://reqres.in/).

## Authors

- [Pawanpreet Singh] - Initial Work

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
