/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */

const getNews = async (category) => {
  const data = { category };
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  };
  const response = await fetch('/api/news', options);
  return response.json();
};

const getSearched = async (category, query) => {
  const data = { category, query };
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  };
  const response = await fetch('/api/news/search', options);
  return response.json();
};
