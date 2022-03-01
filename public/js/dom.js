/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const createNewsCard = ({
  author,
  date,
  imageUrl,
  readMoreUrl,
  time,
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

getNews('all')
  .then(({ data }) => {
    querySelector('.loading').remove();
    data.forEach((news) => {
      createNewsCard(news);
    });
  })
  .catch((error) => {
    window.location.href = '../error/404.html';
  });
