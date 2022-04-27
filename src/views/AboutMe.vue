<template>
  <section>
    <article class="profile">
      <img src="@/assets/yeong.png" alt="프로필 이미지" />
      <h1>Kim YonegJun</h1>
      <h2>FrontEnd Developer</h2>

      <a href="https://github.com/dudwns6503" target="blank" class="btnView"
        >VIEW Github
      </a>
    </article>

    <ul class="contact">
      <li>
        <i class="fas fa-phone-alt"></i>
        <span>010-1234-5678</span>
      </li>
      <li>
        <i class="fas fa-envelope"></i>
        <span>dudwns6503@naver.com</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: absolute;
  width: 340px;
  padding: 30px;
  margin: 120px auto;
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  left: 35%;
}

section article.profile {
  width: 100%;
  text-align: center;
}

section article.profile img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 5px 15px 20px rgba(183, 82, 250, 0.2);
}

section article.profile h1 {
  font-weight: bold;
  font-size: 22px;
  line-height: 1;
  color: #555;
  margin-bottom: 5px;
}

section article.profile h2 {
  font-weight: normal;
  font-size: 12px;
  color: #bbb;
  margin-bottom: 30px;
}

section a.btnView {
  display: block;
  width: 180px;
  height: 32px;
  margin: 0px auto 20px;
  background-color: #444;
  border-radius: 16px;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  line-height: 32px;
  text-align: center;
  background: linear-gradient(45deg, #8e74ff, #a011ff);
  box-shadow: 5px 10px 20px rgba(160, 17, 255, 0.4);
  text-decoration: none;
}

section ul.contact {
  margin-bottom: 5px;
}

section ul.contact li {
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
}

section ul.contact li:last-child {
  border-bottom: none;
}

section ul.contact li i {
  width: 20%;
  text-align: center;
  color: #555;
  font-size: 15px;
  text-shadow: 2px 2px 2px #ddd;
}

section ul.contact li span {
  font-weight: normal;
  font-size: 11px;
  color: #555;
  letter-spacing: 1px;
}
</style>
