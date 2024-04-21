//axios
const posts = [
  { id: 1, titie: '제목1', content: '내용1', createdAt: '2020-01-01' },
  { id: 2, titie: '제목2', content: '내용2', createdAt: '2020-02-01' },
  { id: 3, titie: '제목3', content: '내용3', createdAt: '2020-03-01' },
  { id: 4, titie: '제목4', content: '내용4', createdAt: '2020-04-01' },
  { id: 5, titie: '제목5', content: '내용5', createdAt: '2020-05-01' },
];

export function getPosts() {
  return posts;
}
