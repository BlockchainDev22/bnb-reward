const socials = [
  {
    icon: "twitter",
    to: "https://twitter.com/rewardernet",
  },
  {
    icon: "telegram",
    to: "https://t.me/rewarder_official",
  },
  {
    icon: "email",
    to: "support@rewarder.net",
  }
];

const Tabs = () => {
  return (
    <div className="flex flex-wrap items-center justify-end">
      <ul className="text-sm text-gray-600">
        {socials.map((social, index) => (
          <li className="inline-block relative pe-3 last:pe-0 dark:text-gray-400 dark:before:bg-gray-600 text-white" key={index}>
            <a href={social.to} target="_blank" rel="noreferrer">
              <img
                src={`/assets/icons/${social.icon}.svg`}
                alt="social-icon"
                className="w-8"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
