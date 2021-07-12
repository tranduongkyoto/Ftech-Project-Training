- Environment set up
NodeJS and NPM: NodeJS is the platform needed for the ReactJS development
- Create React App
Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration
npx create-react-app my-app
cd my-app
npm start
- JSX

1. JSX là gì? 
JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.
 
2. Tại sao lại nên dùng JSX
Việc sử dụng JSX trong ReactJS là không bắt buộc. Bạn có thể sử dụng chỉ JS thuần thôi. Nhưng có rất nhiều lý do cho việc nên sử dụng JSX trong ReactJS đấy.

Thứ nhất, JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
Thứ 2, JSX không làm thay đổi ngữ nghĩa của Javascript
Thứ 3, với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn.
3. Nhúng biểu thức trong JSX
 khai báo một biến tên là name và dùng bên trong JSX bằng cách bao trong cặp dấu ngoặc nhọn:

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);