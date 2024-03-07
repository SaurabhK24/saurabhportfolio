import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div class="member-card-container" id="saurav">
      <Image src="/images/portheadshot.png" />
      <h1 class="member-name">Saurabh Khanal</h1>
      <p class="member-role">Nickname : 24k</p>
      <p class="member-major">Favorite Food: Momos!</p>
      <div class="member-socials">
        <a target="_blank" href="https://www.instagram.com/nimay01/">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/saurabh-khanal-516516171"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          />
        </a>
        <a target="_blank" href="https://github.com/NimayVyas">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 496 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
