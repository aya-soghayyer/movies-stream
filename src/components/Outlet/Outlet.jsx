import style from "../Outlet/Outlet.module.css";
import film1 from "../../Images/film1.jpg";
import film2 from "../../Images/film2.jpg";
import film3 from "../../Images/film3.png";
import film4 from "../../Images/film4.jpg";
import film5 from "../../Images/film5.jpg";

function Outlet() {
  return (
    <>
      <div className={style.section}>
        <div className={style.section1}>
          <div className={style.image1}>
            <img src={film1} alt="" />
          </div>
          <div className={style.image2}>
            <img src={film2} alt="" />
          </div>
        </div>
        <table>
          <div className={style.secion2}>
            <tr>
              <td>
                <div className={style.sectionLeft}>
                  <div className={style.continueBox}>
                    <h4>Continue watching</h4>
                    <h4 className={style.movies}> (3 Movies Remaining)</h4>
                    <div className={style.btn}>
                      <button>see more</button>
                    </div>
                  </div>
                  <div className={style.films}>
                    <div className={style.imageInfo}>
                      <div className={style.image3}>
                        <img src={film3} alt="" />
                      </div>
                      <div className={style.info}>
                        <h6>Shrek 3 2022</h6>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={24}
                          width={24}
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="#FFA41C"
                            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className={style.imageInfo4}>
                      <div className={style.image4}>
                        <img src={film4} alt="" />
                      </div>
                      <div className={style.info}>
                        <h6>Riverdale 2 2019</h6>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={24}
                          width={24}
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="#FFA41C"
                            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className={style.image5}>
                  <img src={film5} alt="" />
                </div>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </>
  );
}

export default Outlet;
