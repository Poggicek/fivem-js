import { Entity, Ped, VehicleDoorCollection, VehicleModCollection, VehicleWheelCollection, VehicleWindowCollection } from './';
import { RadioStation, VehicleClass, VehicleLandingGearState, VehicleLockStatus, VehicleRoofState, VehicleSeat } from '../enums';
import { Model } from '../Model';
import { Vector3 } from '../utils';
export declare class Vehicle extends Entity {
    static getModelDisplayName(vehicleModel: Model): string;
    static getModelClass(vehicleModel: Model): VehicleClass;
    static getClassDisplayName(vehicleClass: VehicleClass): string;
    static exists(vehicle: Vehicle): boolean;
    private _doors;
    private _mods;
    private _wheels;
    private _windows;
    constructor(handle: number);
    exists(): boolean;
    get DisplayName(): string;
    get ClassDisplayName(): string;
    get NumberPlate(): string;
    set NumberPlate(value: string);
    get ClassType(): VehicleClass;
    get BodyHealth(): number;
    set BodyHealth(value: number);
    get EngineHealth(): number;
    set EngineHealth(value: number);
    get PetrolTankHealth(): number;
    set PetrolTankHealth(value: number);
    get FuelLevel(): number;
    set FuelLevel(value: number);
    get OilLevel(): number;
    set OilLevel(value: number);
    get Gravity(): number;
    set Gravity(value: number);
    get IsEngineRunning(): boolean;
    set IsEngineRunning(value: boolean);
    get IsEngineStarting(): boolean;
    set IsEngineStarting(value: boolean);
    get IsRadioEnabled(): boolean;
    set IsRadioEnabled(value: boolean);
    set RadioStation(value: RadioStation);
    get Speed(): number;
    set Speed(value: number);
    get WheelSpeed(): number;
    get Acceleration(): number;
    get CurrentRPM(): number;
    set CurrentRPM(value: number);
    get HighGear(): number;
    set HighGear(value: number);
    get CurrentGear(): number;
    get SteeringAngle(): number;
    set SteeringAngle(value: number);
    get SteeringScale(): number;
    set SteeringScale(value: number);
    get IsAlarmSet(): boolean;
    set IsAlarmSet(value: boolean);
    get IsAlarmSounding(): boolean;
    get AlarmTimeLeft(): number;
    set AlarmTimeLeft(value: number);
    startAlarm(): void;
    get IsSirenActive(): boolean;
    set IsSirenActive(value: boolean);
    set IsSirenSilent(value: boolean);
    soundHorn(duration: number): void;
    get IsWanted(): boolean;
    set IsWanted(value: boolean);
    set ProvidesCover(value: boolean);
    set DropsMoneyOnExplosion(value: boolean);
    get PreviouslyOwnedByPlayer(): boolean;
    set PreviouslyOwnedByPlayer(value: boolean);
    get NeedsToBeHotwired(): boolean;
    set NeedsToBeHotwired(value: boolean);
    get AreLightsOn(): boolean;
    set AreLightsOn(value: boolean);
    get AreHighBeamsOn(): boolean;
    set AreHighBeamsOn(value: boolean);
    get IsInteriorLightOn(): boolean;
    set IsInteriorLightOn(value: boolean);
    get IsSearchLightOn(): boolean;
    set IsSearchLightOn(value: boolean);
    get IsTaxiLightOn(): boolean;
    set IsTaxiLightOn(value: boolean);
    get IsLeftIndicatorLightOn(): boolean;
    set IsLeftIndicatorLightOn(value: boolean);
    get IsRightIndicatorLightOn(): boolean;
    set IsRightIndicatorLightOn(value: boolean);
    get IsHandbrakeForcedOn(): boolean;
    set IsHandbrakeForcedOn(value: boolean);
    set AreBrakeLightsOn(value: boolean);
    set LightsMultiplier(value: number);
    set CanBeVisiblyDamaged(value: boolean);
    set Strong(toggle: boolean);
    set CanBreak(toggle: boolean);
    get IsDamaged(): boolean;
    get IsDriveable(): boolean;
    set IsDriveable(value: boolean);
    get IsEngineOnFire(): boolean;
    get HasRoof(): boolean;
    get IsLeftHeadLightBroken(): boolean;
    get IsRightHeadLightBroken(): boolean;
    get IsRearBumperBrokenOff(): boolean;
    get IsFrontBumperBrokenOff(): boolean;
    set IsAxlesStrong(value: boolean);
    set CanEngineDegrade(value: boolean);
    set EnginePowerMultiplier(value: number);
    set EngineTorqueMultiplier(value: number);
    get LandingGearState(): VehicleLandingGearState;
    set LandingGearState(value: VehicleLandingGearState);
    get RoofState(): VehicleRoofState;
    set RoofState(value: VehicleRoofState);
    get LockStatus(): VehicleLockStatus;
    set LockStatus(value: VehicleLockStatus);
    get MaxBraking(): number;
    get MaxTraction(): number;
    get IsOnAllWheels(): boolean;
    get IsStopped(): boolean;
    get IsStoppedAtTrafficLights(): boolean;
    get IsStolen(): boolean;
    set IsStolen(value: boolean);
    get IsConvertible(): boolean;
    set IsBurnoutForced(value: boolean);
    get IsInBurnout(): boolean;
    get Driver(): Ped;
    get Occupants(): Ped[];
    get Passengers(): Ped[];
    get Doors(): VehicleDoorCollection;
    get Mods(): VehicleModCollection;
    get Wheels(): VehicleWheelCollection;
    get Windows(): VehicleWindowCollection;
    extraExists(extra: number): boolean;
    isExtraOn(extra: number): boolean;
    toggleExtra(extra: number, toggle: boolean): void;
    getPedOnSeat(seat: VehicleSeat): Ped;
    isSeatFree(seat: VehicleSeat): boolean;
    wash(): void;
    get DirtLevel(): number;
    set DirtLevel(value: number);
    placeOnGround(): void;
    repair(): void;
    explode(): void;
    explodeNetworked(): void;
    get CanTiresBurst(): boolean;
    set CanTiresBurst(value: boolean);
    set CanWheelsBreak(value: boolean);
    set CanDeformWheels(value: boolean);
    get HasBombBay(): boolean;
    openBombBay(): void;
    closeBombBay(): void;
    setHeliYawPitchRollMult(mult: number): void;
    set TowingCraneRaisedAmount(value: number);
    get TowedVehicle(): Vehicle;
    towVehicle(vehicle: Vehicle, rear: boolean): void;
    detachFromTowTruck(): void;
    detachTowedVehicle(): void;
    deform(position: Vector3, damageAmount: number, radius: number): void;
    get PassengerCapacity(): number;
    get PassengerCount(): number;
    set RespotTimer(time: number);
}
