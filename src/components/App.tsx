import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./Layout/Layout";
import { accountsData, profilesData, campaignsData } from "../data/data";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("./Home/Home"));
const AccountsTable = lazy(() => import("./AccountsTable/AccountsTable"));
const ProfilesTable = lazy(() => import("./ProfilesTable/ProfilesTable"));
const CampaignsTable = lazy(() => import("./CampaignsTable/CampaignsTable"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/accounts"
              element={<AccountsTable data={accountsData} />}
            />
            <Route
              path="/profiles"
              element={<ProfilesTable data={profilesData} />}
            />
            <Route
              path="/campaigns"
              element={<CampaignsTable data={campaignsData} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
