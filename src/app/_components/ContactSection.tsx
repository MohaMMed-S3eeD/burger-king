const MapSection = () => {
  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d-74.0059413!3d40.7128029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e83478f%3A0x6fcb28b497c51a88!2sBurger%20King!5e1!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="border-0 shadow-lg"
        allowFullScreen
        loading="lazy"
        title="Burger King Restaurant Location"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapSection;
