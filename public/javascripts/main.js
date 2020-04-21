const formEl = document.forms.form;
formEl.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const data = new FormData(formEl);
  console.log(data);
  const b = async () => {
    const valid = await axios.post('/test2', data);
    // const verify = await axios.post('/verifying');
    // const sender = await axios.post('/article', data);
    console.log('sended!');
    const vrf = await axios.post('/vrf');
  };
  b();
});
