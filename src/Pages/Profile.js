// logout, login and selectUser reducers from user slice
import { selectUser } from "./../features/userSlice";
// use selector from redux
import { useSelector } from "react-redux";
// auth form firebase
import { auth } from "../firebase";
// avatar image
import Avatar from "./../assets/imgs/no-av.png";

// style
import "./../styles/css/profile.css";
import { useState } from "react";

// plans
let plans = [
  {
    id: 0,
    name: "basic",
    des: "480p",
    rate: "20",
    isCurrent: false,
  },
  {
    id: 1,
    name: "standard",
    des: "720p",
    rate: "50",
    isCurrent: false,
  },
  {
    id: 2,
    name: "premium",
    des: "1080p",
    rate: "80",
    isCurrent: false,
  },
  {
    id: 3,
    name: "diamond",
    des: "4k",
    rate: "100",
    isCurrent: true,
  },
];

const Profile = () => {
  const user = useSelector(selectUser);
  const [current] = useState(
    plans.find((plan) => {
      if (plan.isCurrent === true) return plan;
    })
  );

  const currentBtn = (
    <button className="profile-con-plans-con-plans-plan-sub current-btn">
      current plan
    </button>
  );
  const SubBtn = (
    <button className="profile-con-plans-con-plans-plan-sub">subscribe</button>
  );

  return (
    <>
      <div className="profile">
        <h2>edit profile</h2>
        <div className="profile-con">
          <img src={Avatar} alt="avtar" />
          <p className="profile-con-useremail">{user.email}</p>
          <div className="profile-con-plans-con">
            <h3>plans</h3>
            <p>
              current plan:
              <span>{current.name}</span>
            </p>
            <div className="profile-con-plans-con-plans">
              {plans.map((plan) => {
                return (
                  <div
                    className={`${
                      plan.isCurrent && "plan-current"
                    } profile-con-plans-con-plans-plan`}
                    key={plan.id}
                  >
                    <p className="profile-con-plans-con-plans-plan-name">
                      widdflix {plan.name}
                    </p>
                    <p className="profile-con-plans-con-plans-plan-des">
                      {plan.des}
                    </p>
                    <p className="profile-con-plans-con-plans-plan-rate">
                      $ {plan.rate} /m
                    </p>
                    {plan.isCurrent ? currentBtn : SubBtn}
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => auth.signOut()}
            className="profile-con-signout"
          >
            sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
