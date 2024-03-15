const Card = ({movie}) => {
  return (
      <>
          <div className="album py-5 bg-body-tertiary">
              <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col">
                          <div className="card shadow-sm">
                              <img src={movie.Poster} alt="Thumbnail" width="100%" />
                              <div className="card-body">
                                  <p className="card-text">{movie.Title}</p>
                                  <div className="d-flex justify-content-between align-items-center">
                                      <div className="btn-group">
                                          <button type="button" className="btn btn-sm btn-outline-secondary">View
                                          </button>
                                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                                          </button>
                                      </div>
                                      <small className="text-body-secondary">9 mins</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
export default Card;