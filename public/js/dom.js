/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const createNewsCard = () => {
  const imgUrl = 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/1_tue/img_1646137655344_536.jpg';
  const newsContainer = querySelector('.news__container');

  const newsCard = createElement('div', 'news-card', newsContainer);

  const imageNewsCard = createElement('div', 'image__news-card', newsCard);
  const imageNews = createElement('img', '', imageNewsCard);
  imageNews.src = imgUrl;

  const infoNewsCard = createElement('div', 'info__news-card', newsCard);

  const titleNews = createElement('h2', 'title__news', infoNewsCard);
  titleNews.textContent = 'PM Modi speaks to the father of 21-yr-old Indian ';

  const dateNews = createElement('p', 'date__news', infoNewsCard);
  const shortBy = createElement('strong', 'short__by', dateNews);
  shortBy.textContent = 'Short By: ';
  const name = createElement('span', 'name', dateNews);
  name.textContent = 'Arshiya Chopra';
  const time = createElement('span', 'time', dateNews);
  time.textContent = '| 06:10 pm on 01 Mar 2022,Tuesday';

  const btnReadMore = createElement('button', 'btn__read-more', infoNewsCard);
  btnReadMore.id = 'btn__read-more';
  btnReadMore.textContent = 'Read more';
  btnReadMore.setAttribute(
    'onclick',
    "window.open('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/1_tue/img_1646137655344_536.jpg', '_blank')",
  );
};

createNewsCard();
