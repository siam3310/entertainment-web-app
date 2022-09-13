import { getData, movieNowPlaying } from '../../../../lib/tmdb';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const { data } = await getData(movieNowPlaying, id);

    res.status(200).json({
      results: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
