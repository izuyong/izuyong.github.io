// 获取留言表单和留言列表元素
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

// 当提交留言表单时触发的函数
commentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // 获取用户输入的姓名、邮箱和留言内容
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  // 创建一个新的留言列表项元素
  const newCommentLi = document.createElement('li');
  newCommentLi.innerHTML = `<strong>${name}</strong> (<em>${email}</em>)<br>${comment}`;

  // 将新留言添加到留言列表中
  commentsList.appendChild(newCommentLi);

  // 清空表单输入框
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('comment').value = '';
});