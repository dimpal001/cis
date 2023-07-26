import React from "react";

const Footer = () => {

  return (
    <>
      <footer class="footer mt-3 py-3 bg-light">
        <div class="container">
          <p class="text-center">&copy; All rights reserved. &nbsp; NEHU, Shillong {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
