import { Restaurant } from './entities/restaurant.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => Restaurant)
  myRestaurant() {
    return true;
  }

  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
