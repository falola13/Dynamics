import MainContent from "@/components/MainContent";
import SubHeader from "@/components/subheader";

const Page = () => {
  return (
    <div className="scrollable-container h-screen bg-[#f5f5f5]">
      {/* Main Content */}
      {/* <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">My open leads</h1>
          <div className="flex space-x-2">
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-chart-bar"></i> Show chart
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-eye"></i> Focused view
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-plus"></i> New
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-sync"></i> Refresh
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-users"></i> Collaborate
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-trash"></i> Delete
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-database"></i> Smart data
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-filter"></i> Edit filters
            </button>
            <button className="bg-gray-200 p-2 rounded">
              <i className="fas fa-columns"></i> Edit columns
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-bold mb-2">
            Hi Mona, <span className="text-blue-600">68% of goal achieved</span>{" "}
            and rest can be achieved by focusing on 20 top leads.
          </h2>
          <p className="text-gray-600 mb-4">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </p>
          <div className="flex space-x-4">
            <div className="flex-1 bg-gray-100 p-4 rounded">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Jane Reyes"
                  className="rounded-full mr-2"
                />
                <div>
                  <div className="font-bold">Jane Reyes</div>
                  <div className="text-sm text-gray-600">
                    COO - Northwind Traders
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">
                Jane may be interested in upgrading espresso machines for her
                in-store coffee shops.
              </p>
              <button className="text-blue-600">
                Expand business • High buying intent
              </button>
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Allan Munger"
                  className="rounded-full mr-2"
                />
                <div>
                  <div className="font-bold">Allan Munger</div>
                  <div className="text-sm text-gray-600">
                    Head of Real Estate Development - Contoso Coffee
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">
                Prepare for high-buying intent meeting Copilot scheduled for 2
                PM regarding upgrading service contract.
              </p>
              <button className="text-blue-600">
                Upcoming meeting • Due today
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-bold mb-2">Other key activities</h2>
          <div className="flex space-x-4">
            <div className="flex-1 bg-gray-100 p-4 rounded">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Cafe A100 for Woodland Bank"
                  className="rounded-full mr-2"
                />
                <div>
                  <div className="font-bold">Cafe A100 for Woodland Bank</div>
                  <div className="text-sm text-gray-600">
                    Review draft and reply to Chris Naido
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded">
              <div className="flex items-center mb-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Partnership opportunity for Fabrikam"
                  className="rounded-full mr-2"
                />
                <div>
                  <div className="font-bold">
                    Partnership opportunity for Fabrikam
                  </div>
                  <div className="text-sm text-gray-600">
                    Prepare me for Fabrikams key stakeholder meeting
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="text-blue-600 mt-2">
            Show all key activities
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="Sort, filter and search with Copilot"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Topic</th>
                <th className="p-2 border-b">Status reason</th>
                <th className="p-2 border-b">Created on</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Winford Asher",
                  topic: "Cafe A100 for commercial use",
                  status: "New",
                  date: "4/02/2024 12:00 PM",
                },
                {
                  name: "Josia Love",
                  topic: "Upgrading service plan",
                  status: "New",
                  date: "3/30/2024 7:45 AM",
                },
                {
                  name: "Harrison Curtis",
                  topic: "Issue with throughput on EspressoMaster",
                  status: "New",
                  date: "3/28/2024 3:30 PM",
                },
                {
                  name: "Jermaine Berrett",
                  topic: "New roaster in distribution facility",
                  status: "New",
                  date: "3/25/2024 11:05 AM",
                },
                {
                  name: "Gerald Stephens",
                  topic: "Concerns on current machines",
                  status: "New",
                  date: "3/23/2024 4:50 PM",
                },
                {
                  name: "Halle Griffiths",
                  topic: "Expanding business",
                  status: "New",
                  date: "3/21/2024 10:20 AM",
                },
                {
                  name: "Rachel Michael",
                  topic: "Addressing service concerns",
                  status: "New",
                  date: "3/19/2024 1:15 PM",
                },
                {
                  name: "Alex Baker",
                  topic: "Premium coffee beans",
                  status: "New",
                  date: "3/17/2024 8:00 AM",
                },
                {
                  name: "Lilly Pyles",
                  topic: "Cafe A100 bulk rate",
                  status: "New",
                  date: "3/13/2024 2:45 PM",
                },
                {
                  name: "Jane Reyes",
                  topic: "Improving cost per cup",
                  status: "New",
                  date: "3/10/2024 9:30 AM",
                },
              ].map((lead, index) => (
                <tr key={index}>
                  <td className="p-2 border-b">{lead.name}</td>
                  <td className="p-2 border-b">{lead.topic}</td>
                  <td className="p-2 border-b">{lead.status}</td>
                  <td className="p-2 border-b">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="p-3">
        <SubHeader />
        <MainContent />
      </div>
    </div>
  );
};
export default Page;
