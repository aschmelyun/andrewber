<?php

namespace App\Policies;

use App\Models\Trip;
use App\Models\User;

class TripPolicy
{
    public function view(User $user, Trip $trip): bool
    {
        // If the trip was created by the user...
        return ($trip->user->id === $user->id) ||

            // or...
            (
                // The trip has a driver and the user IS a driver
                ($trip->driver && $user->driver) &&

                // AND the trip's driver is the current user
                ($trip->driver->id === $user->driver->id)
            );
    }
}
