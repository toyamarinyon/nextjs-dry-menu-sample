// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    menu: [
      { href: "/with-cache", name: "Home" },
      { href: "/with-cache/about", name: "About" },
      { href: "/with-cache/contact", name: "Contact" },
    ],
  });
};
