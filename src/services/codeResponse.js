export const codeResponse = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  const url = "https://naramunzapi-beta.azurewebsites.net/api/token/epic";
  const url2 = "https://naramunzapi-beta.azurewebsites.net/api/users/wallet";
  const authHeaderValue = btoa(
    "xyza7891JqURqLDsngnChqqfNdWvDsup:3TozrQC77uKxyjiqE0cNfgqkFoOBqzL2hdkxueaUoFs"
  );

  try {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authHeaderValue}`,
        },
        body: `"${code}"`,
      });
      const auth_token = await response.json();
      const auth_header_value = `Bearer ${auth_token}`;
      return { auth_header_value, auth_token };
    };
    fetchData().then(async ({ auth_header_value, auth_token }) => {
      localStorage.setItem("authToken", auth_token);
      const response = await fetch(url2, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth_header_value,
        },
      });
      console.log(response);
      if (response.status == 200) {
        const jsonResponse = await response.text();
        localStorage.setItem("walletAddress", jsonResponse);
        window.location.href = "/#/profile";
      } else if (response.status == 204) {
        window.location.href = "/#/profile";
        localStorage.setItem("walletAddress", "undefined");
      } else if (response.status == 401) {
        window.location.href = "/#/";
      }
    });
  } catch (error) {
    console.log(error);
  }
};
