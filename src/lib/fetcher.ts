interface IOptions {
  body?: BodyInit;
  headers?: HeadersInit;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const updateOptions = (options?: IOptions) => {
  const update = { ...options };
  update.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return update;
};

export default function fetcher(url: string, options?: IOptions) {
  const baseUrl = 'https://edu.magicbot.uz/api/v1';
  return fetch(baseUrl + url, updateOptions(options));
}
