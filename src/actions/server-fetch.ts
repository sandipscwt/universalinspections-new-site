"use server";

export const ServerFetch = async (urlEndPoint: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlEndPoint}`, options);

    return response.json();
  } catch (error) {
    let m = "Error occurred";
    if (error instanceof Error) {
      m = error.message;
    }
    return {
      status: false,
      message: m,
    };
  }
};
