/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const createNewsCard = ({
  author,
  date,
  imageUrl,
  readMoreUrl,
  time,
  content,
  title,
}) => {
  const newsContainer = querySelector('.news__container');

  const newsCard = createElement('div', 'news-card', newsContainer);

  const imageNewsCard = createElement('div', 'image__news-card', newsCard);
  const imageNews = createElement('img', '', imageNewsCard);
  imageNews.src = imageUrl;

  const infoNewsCard = createElement('div', 'info__news-card', newsCard);

  const titleNews = createElement('h2', 'title__news', infoNewsCard);
  titleNews.textContent = title;

  const bodyContent = createElement('p', 'content__news', infoNewsCard);
  bodyContent.textContent = content;

  const dateNews = createElement('p', 'date__news', infoNewsCard);
  const shortBy = createElement('strong', 'short__by', dateNews);
  shortBy.textContent = 'Short By: ';
  const name = createElement('span', 'name', dateNews);
  name.textContent = author;
  const times = createElement('span', 'time', dateNews);
  times.textContent = `| ${time} on ${date}`;

  const btnReadMore = createElement('button', 'btn__read-more', infoNewsCard);
  btnReadMore.id = 'btn__read-more';
  btnReadMore.textContent = 'Read more';
  btnReadMore.setAttribute(
    'onclick',
    `window.open('${readMoreUrl}', '_blank')`,
  );
};

const createNotFoundCard = (message) => {
  const newsContainer = querySelector('.news__container');

  const notFoundCard = createElement('div', 'not-found', newsContainer);
  notFoundCard.textContent = message;
};

const handleGetNews = (category) => {
  getNews(category)
    .then(({ data }) => {
      querySelector('.loading').style.display = 'none';
      data.forEach((news) => {
        createNewsCard(news);
      });
    })
    .catch((error) => {
      window.location.href = '/error/404.html';
    });
};

querySelectorAll('.item-category').forEach(({ lastChild }) => {
  const { data } = lastChild;
  addListener(`a[data-category="${data}"]`, 'click', ({ target }) => {
    querySelector('#search-input').dataset.category = data;
    querySelector('.news__container').innerHTML = '';
    querySelector('.loading').style.display = 'flex';
    const { category } = target.dataset;
    handleGetNews(category);
  });
});

const handleGetSearchNews = (category, query) => {
  getSearched(category, query)
    .then((data) => {
      querySelector('.loading').style.display = 'none';
      if (data.success === true) {
        createNotFoundCard(data.message);
        return;
      }
      data.forEach((news) => {
        createNewsCard(news);
      });
    })
    .catch((error) => {
      window.location.href = '/error/404.html';
    });
};

addListener('#search-input', 'keyup', (event) => {
  const { target } = event;
  if (event.keyCode === 13 && target.value.length > 0) {
    // Cancel the default action, if needed
    event.preventDefault();
    querySelector('.news__container').innerHTML = '';
    querySelector('.loading').style.display = 'flex';
    const { category } = target.dataset;
    const { value: query } = target;
    handleGetSearchNews(category, query);
  } else if (target.value.length <= 0) {
    querySelector('.news__container').innerHTML = '';
    handleGetNews('all');
  }
});

window.onload = () => {
  const cookies = document.cookie
    .split(' ')
    .find((row) => row.startsWith('userName='))
    .split('=')[1];
  querySelector('#username').textContent = cookies;
  const defaultCategory = 'all';
  querySelector('#search-input').dataset.category = defaultCategory;
  handleGetNews(defaultCategory);
};
