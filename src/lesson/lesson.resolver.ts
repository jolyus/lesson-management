import { Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {
    
    @Query(returns => LessonType)
    lesson() {
        return {
            id: '213dfs32',
            name: 'Math Class',
            startDate: (new Date().toDateString),
            endDate: (new Date().toDateString)
        }
    }
}