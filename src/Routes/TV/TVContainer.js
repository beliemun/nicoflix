import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <TVPresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  );
}

export default TVContainer;
