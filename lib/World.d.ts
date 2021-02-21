import { Entity, Model, Prop } from './';
import { Blip } from './Blip';
import { Camera } from './Camera';
import { CloudHat, IntersectOptions, MarkerType, Weather } from './enums';
import { Ped, Vehicle } from './models';
import { RaycastResult } from './Raycast';
import { Color, Vector3 } from './utils';
/**
 * Class with common world manipulations.
 *
 * This class includes methods for creating entities and common world rendering.
 *
 * You can create blips, entities, cameras and more.
 *
 * @abstract
 */
export declare abstract class World {
    /**
     * Get the current camera that's rendering.
     *
     * @returns The camera that's currently used.
     */
    static get RenderingCamera(): Camera;
    /**
     * Set the rendering camera. World.RenderingCamera = null to reset.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * World.RenderingCamera = myCamera;
     *
     * // Reset to default cam
     * World.RenderingCamera = null;
     * ```
     *
     * @param value The camera to render.
     */
    static set RenderingCamera(value: Camera);
    /**
     * Get the current date in the world.
     *
     * @returns The current date.
     */
    static get CurrentDate(): Date;
    /**
     * Set the current date of the world.
     */
    static set CurrentDate(date: Date);
    /**
     * Disables all emissive textures, street/building/vehicle lights. "EMP" effect.
     *
     * @param value On or off.
     */
    static set Blackout(value: boolean);
    /**
     * Get the current cloud hat.
     *
     * @returns The current cloud hat type.
     */
    static get CloudHat(): CloudHat;
    /**
     * Set the current cloud hat.
     *
     * @param value The type of cloud hat.
     */
    static set CloudHat(value: CloudHat);
    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns The current cloud opacity between 0.0 and 1.0
     */
    static get CloudHatOpacity(): number;
    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param value Opacity between 0.0 and 1.0
     */
    static set CloudHatOpacity(value: number);
    /**
     * Get the current weather type.
     *
     * @returns The current type of weather.
     */
    static get Weather(): Weather;
    /**
     * Set the current weather.
     *
     * @param value Type of weather to set.
     */
    static set Weather(value: Weather);
    /**
     * Get the next weather type.
     *
     * @returns The Weather type
     */
    static get NextWeather(): Weather;
    /**
     * Set weather type instantly. Similar to World.transitionToWeather with duration 0.
     */
    static set NextWeather(value: Weather);
    /**
     * Doesn't work
     */
    static get WeatherTransition(): [string | Weather, string | Weather, number];
    /**
     * Doesn't work
     */
    static set WeatherTransition(transition: [string | Weather, string | Weather, number]);
    /**
     * Transition to different weather type within a certain time.
     *
     * @param weather Weather type to change to.
     * @param duration Time for full weather change (in milliseconds);
     */
    static transitionToWeather(weather: Weather, duration: number): void;
    /**
     * Destroys all existing cameras and sets your rendering camera back to GameplayCam.
     */
    static destroyAllCameras(): void;
    /**
     * Creates a blip at a given position and optionally radius.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myStoreBlip = World.createBlip(position, 5.0);
     * myStoreBlip.Sprite = BlipSprite.Store;
     * ```
     *
     * @param position World coordinate of blip.
     * @param radius (Optional) Radius of where blip should be shown.
     * @returns Blip object.
     */
    static createBlip(position: Vector3, radius?: number): Blip;
    /**
     * Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * ```
     *
     * @param position World coordinate where the camera should render.
     * @param rotation Rotation of camera relative to world.
     * @param fieldOfView Field of view angle of camera.
     * @returns Camera object.
     */
    static createCamera(position: Vector3, rotation: Vector3, fieldOfView: number): Camera;
    /**
     * Create a ped at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("a_f_m_beach_01");
     * const myPed = await World.createPed(model, position);
     * ```
     *
     * @param model Ped model to be spawned.
     * @param position World position (coordinates) of Ped spawn.
     * @param heading Heading of Ped when spawning.
     * @param isNetwork
     * @returns Ped object.
     */
    static createPed(model: Model, position: Vector3, heading?: number, isNetwork?: boolean): Promise<Ped>;
    /**
     * Creates a [[`Ped`]] with a random model.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomPed = World.createRandomPed(position);
     * ```
     *
     * @param position World coordinate of Ped spawn.
     * @returns Ped object.
     */
    static createRandomPed(position: Vector3): Ped;
    /**
     * Create a vehicle at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("adder");
     * const myVehicle = await World.createVehicle(model, position);
     * ```
     *
     * @param model Vehicle model to be spawned.
     * @param position World position (coordinates) of Vehicle spawn.
     * @param heading Heading of Vehicle when spawning.
     * @param isNetwork
     * @returns Vehicle object.
     */
    static createVehicle(model: Model, position: Vector3, heading?: number, isNetwork?: boolean): Promise<Vehicle>;
    /**
     * Create a random vehicle at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomVehicle = await World.createRandomVehicle(position);
     * ```
     *
     * @param position World position (coordinates) of Vehicle spawn.
     * @param heading Heading of Vehicle when spawning.
     * @param isNetwork
     * @returns Vehicle object.
     */
    static createRandomVehicle(position: Vector3, heading?: number, isNetwork?: boolean): Promise<Vehicle>;
    /**
     * Spawns a [[`Prop`]] at the given position.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("prop_barrel_02a");
     * const myBarrelProp = await World.createProp(model, position, false, true);
     * ```
     *
     * @param model The [[`Model`]] to spawn (must be a Prop)
     * @param position Location of Prop
     * @param dynamic If set to true, the Prop will have physics otherwise it's static.
     * @param placeOnGround If set to true, sets the Prop on the ground nearest to position.
     * @param isNetwork
     * @returns Prop object.
     */
    static createProp(model: Model, position: Vector3, dynamic: boolean, placeOnGround: boolean, isNetwork?: boolean): Promise<Prop>;
    /**
     * Draw a marker at a desired location. Careful! Must be drawn every tick.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const zeroVector = new Vector3(0,0,0);
     *
     * setTick(() => {
     *  World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
     * })
     * ```
     *
     * @param type Type of marker.
     * @param position Location of marker.
     * @param direction Direction facing.
     * @param rotation World rotation.
     * @param scale Size of marker.
     * @param color Color of marker.
     * @param bobUpAndDown Animated movement along marker's own X axis.
     * @param faceCamera Rendering marker facing rendering camera.
     * @param rotateY Rotate along Y axis.
     * @param textureDict Custom texture dictionary for custom marker.
     * @param textureName Custom texture name for custom marker.
     * @param drawOnEntity Render the marker on an entity.
     */
    static drawMarker(type: MarkerType, position: Vector3, direction: Vector3, rotation: Vector3, scale: Vector3, color: Color, bobUpAndDown?: boolean, faceCamera?: boolean, rotateY?: boolean, textureDict?: string, textureName?: string, drawOnEntity?: boolean): void;
    /**
     * Creates a light in the world with a certain length (range).
     *
     * @param pos World coordinate where to draw the light.
     * @param color RGB colors of the light.
     * @param range How far to draw the light.
     * @param intensity Intensity of the light ("alpha").
     */
    static drawLightWithRange(pos: Vector3, color: Color, range: number, intensity: number): void;
    /**
     * Creates a light in the world. More configurable than World.drawLightWithRange.
     *
     * @param pos World coordinate of spotlight.
     * @param dir Direction to face spotlight.
     * @param color RGB colors of spotlight.
     * @param distance The maximum distance the spotlight can reach.
     * @param brightness Brightness of the spotlight.
     * @param roundness "Smoothness" of the edge of the spotlight.
     * @param radius Radius size of spotlight.
     * @param fadeOut Falloff size of the spotlight's edge.
     */
    static drawSpotLight(pos: Vector3, dir: Vector3, color: Color, distance: number, brightness: number, roundness: number, radius: number, fadeOut: number): void;
    /**
     * Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.
     *
     * @param pos World coordinate of spotlight.
     * @param dir Direction to face spotlight.
     * @param color RGB colors of spotlight.
     * @param distance The maximum distance the spotlight can reach.
     * @param brightness Brightness of the spotlight.
     * @param roundness "Smoothness" of the edge of the spotlight.
     * @param radius Radius size of spotlight.
     * @param fadeOut Falloff size of the spotlight's edge.
     */
    static drawSpotLightWithShadow(pos: Vector3, dir: Vector3, color: Color, distance: number, brightness: number, roundness: number, radius: number, fadeOut: number): void;
    /**
     * Draws a line in the world. It's not possible to change thickness.
     *
     * @param start World coordinate of start position of line.
     * @param end World coordinate of end position of line.
     * @param color RGB color of line.
     */
    static drawLine(start: Vector3, end: Vector3, color: Color): void;
    /**
     * Draw polygon in the world.
     *
     * @param vertexA World coordinate of first point.
     * @param vertexB World coordinate of second point.
     * @param vertexC World coordinate of third point.
     * @param color RGB color of polygon.
     */
    static drawPoly(vertexA: Vector3, vertexB: Vector3, vertexC: Vector3, color: Color): void;
    /**
     * Cast ("shoot") a ray in a certain direction to detect entities in the way.
     *
     * @param source Starting position of raycast.
     * @param direction Direction to cast a ray to.
     * @param maxDistance Max distance to cast the ray.
     * @param options Possible entity types to detect.
     * @param ignoreEntity An entity to ignore (usually player's Ped).
     * @returns RaycastResult object.
     */
    static raycast(source: Vector3, direction: Vector3, maxDistance: number, options: IntersectOptions, ignoreEntity: Entity): RaycastResult;
    /**
     * Get all [[`Prop`]] entities in your own scope.
     *
     * @returns Array of Props.
     */
    static getAllProps(): Prop[];
    /**
     * Get all [[`Ped`]] entities in your own scope.
     *
     * @returns Array of Peds.
     */
    static getAllPeds(): Ped[];
    /**
     * Get all [[`Vehicle`]] entities in your own scope.
     *
     * @returns Array of Vehicles.
     */
    static getAllVehicles(): Vehicle[];
    private static currentCloudHat;
    private static cloudHatDict;
    private static weatherDict;
}
