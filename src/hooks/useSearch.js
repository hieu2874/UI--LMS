import { useMemo } from "react";
import { features } from "../data/features";
/** 
  @param {String} query
  @param {Array} courses
  @param {Array} features
*/
export default function useSearch(query, courses = [], features = []) {
    const search = String(query || "").toLowerCase().trim();

    const filteredCourses = useMemo(() => {
        if (!search) return courses;
        return courses.filter((courses) => {
            const title = String(courses?.title || "").toLowerCase();   
            const description = String(courses?.description || "").toLowerCase();
            const author = String(courses?.author || "").toLowerCase();
            return (
                title.includes(search) ||
                description.includes(search) ||
                author.includes(search)
            );
        });
    }, [search, courses]);

    const filteredFeatures = useMemo(() => {
        if (!search) return features;
        return features.filter((item) => {
            const subtitle = String(item?.subtitle || "").toLowerCase();
            const description = String(item?.description || "").toLowerCase();
            return subtitle.includes(search) || description.includes(search);
        });
    }, [search, features]);

    return {
        filteredCourses,
        filteredFeatures,
    };
}

