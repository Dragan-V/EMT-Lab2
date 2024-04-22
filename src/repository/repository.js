import instance from "../custom-axios/axios";

const RepositoryService ={
    fetchCategories: () => {
        return instance.get("booking/categories");
    },
    fetchAccommodations: () => {

        return instance.get("/booking/bookings")
            .then(response => {
                console.log("Fetch Accommodations Success:", response.data);
                return response;
            })
            .catch(error => {
                console.error("Fetch Accommodations Error:", error);
                throw error;
            });
    },
    deleteAccommodation: (id) => {
        console.log("Delete Accommodation Service:", id);
        return instance.post(`/booking/delete-booking/${id}`);
    },
    rentAccommodation: (id) => {
        return instance.post(`/booking/rent/${id}`);
    },
    addAccommodation: (name, category, host,numRooms) => {
        return instance.post("/booking/add-booking", {
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        });
    },
    editAccommodation: (id, name, category, host,numRooms) => {
        return instance.post(`/booking/update-booking/${id}`, {
            "name": name,
            "category": category,
            "host": host,
            "numRooms": numRooms
        });
    },
    getAccommodation: (id) => {
        return instance.get(`/booking/bookings/${id}`);
    }

}

export default RepositoryService;