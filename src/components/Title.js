function Title({ imageUrl, alt, title }) {
  return (
    <h1 className="font-bold text-3xl flex items-center ml-[-60px] mb-16">
      <img src={imageUrl} alt={alt} className="inline-block mr-3" />
      {title}
    </h1>
  );
}

export default Title;
