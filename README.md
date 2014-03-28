# Ember @ UA5

## Intro

Refer to [core concepts][].

In short: A heavy client-side web framework for building big, URL-driven clients.

[core concepts]: http://emberjs.com/guides/concepts/core-concepts/

> We're not going to go through all the marketing points for the framework. The
goal is to assess the framework with objectivity. We're going to compare it with
our current tools. And in the process I hope we can better understand if Ember
is a fit.

## Features

Refer to [wikipedia][].

Highlights:

- Router controls state.
- Full-featured templated-view layer. Enhanced Handlebars.
- Web components layer.
- Advanced objects, with optional prototype. See [object model guide][].
- Out-of-the-box [application class][].
- [Ember Data][] (beta) as ORM with persistence and RESTful networking (like
  ActiveRecord or Doctrine 1).
- Integration testing QUnit API and Chrome DevTools extension.
- Solid documentation and guides. Like Symfony, written around use-cases, but
  optionally go into depth about [internals][].

[wikipedia]: http://en.wikipedia.org/wiki/EmberJS/
[object model guide]: http://emberjs.com/guides/object-model/what-do-i-use-when/
[application class]: http://emberjs.com/guides/application/
[Ember Data]: https://github.com/emberjs/data/
[internals]: http://emberjs.com/guides/understanding-ember/the-view-layer/

> We have a list of highlights; not many, just a few. Ember, despite its
relatively large size, doesn't seem to provide a ton of additional features.
Instead it seems to provide a more complete MVC framework that also takes into
account web technologies by addressing web-components (js/css/html slices) and
URLs for state.

## Comparison

Semi-comprehensive list of the feature differences with Backbone:

### Foundation features:

Feature              | Backbone             | Ember
:------------------- | :------------------- | :-------------------
object super         | plain js, verbose    | `_super` magic method
object creation      | plain js, `new`      | `create` method
object accessors     | only data classes    | all and computable
object kvobservation | only data classes    | all props, auto: `*Changed`
object bindings      | manual, via events   | two-way, auto: `*Binding`
object mixins        | `_.extend`           | `extend`, `reopen`, `reopenClass`
object manipulation  | `_`                  | `Ember`
object collections   | `Collection`         | `ArrayController`, bonus `SortableMixin`, `Ember.Enumerable`
object key paths     | not provided         | `todos.@each.isDone`
method decorators    | not provided         | prototype extensions (optional)
redundancy guarding  | not provided         | `Ember.run.once`

### View and template features:

Feature              | Backbone             | Ember
:------------------- | :------------------- | :-------------------
separation / control | view -> model        | template -> controller -> model
attribute bindings   | manual, via events   | two-way, auto: `attributeBindings`, `bind-attr`, `classNameBindings`
template context     | manual, in view      | controller (proxies and extends model)
template nesting     | manual, in view      | `render`, `outlet`
template helpers     | not provided         | `input`, `textarea` (auto-bind)
template partials    | depends on templater | `partial`, `view`
template sharing     | not provided         | `view` block form
layout templates     | not provided         | `yield`, `layoutName`
view actions         | `events` map         | `action` (Handlebars), auto: view methods (if complex)
container views      | not provided         | `Ember.ContainerView`

### Router and manager features:

Feature              | Backbone             | Ember
:------------------- | :------------------- | :-------------------
app class            | makeshift            | `Ember.Application`
url generation       | manual, hard-coded   | `link-to`, auto-interpolation, auto-updating, `query-params`
route objects        | not provided         | route handlers via `Route.extend`
route groups         | new router           | router resource (REST) with 'namespaced' route names
route transitions    | not provided         | `Router.transitionTo`, `Controller.transitionToRoute`, nested routes means sequential transitions
route redirect       | manual (`navigate`)  | `redirect`, `transitions.abort`, `transition.retry`
route composition    | not provided         | nested `resource` calls
loading integration  | manual, events?      | `loading` action and bubbling event and route
error integration    | manual, events?      | `error` action and bubbling event and route
controllers          | not provided (MVP)   | `(Object/Array/)Controller`, 1 per route, `setupController`, store state
storing misc. state  | 'local' model        | controller, which proxies the model
implied controllers  | not provided         | can generate (instantiate), can override via `controllerName`
implied models       | not provided         | can override in `model`
implied templates    | not provided         | can override in `renderTemplate`

### Network and persistence features:

Feature              | Backbone             | Ember
:------------------- | :------------------- | :-------------------
promise support      | not provided         | accepted by `Route.model`
promises             | jQuery               | `Ember.RSVP` or jQuery
model library outlet | not provided         | makes `Ember.Data` optional
route hooks          | not provided         | `beforeModel`, `afterModel`, promise support (resolve and reject)
route guarding       | manual               | `willTransition` action
persistence          | third-party          | `Ember.Data`/`DS` or third-party
data store           | third-party          | `DS.Store`, automatic caching, record management
orm / schema         | third-party          | `DS.attr`, `DS.hasMany`, `DS.belongsTo`
RESTful networking   | `sync`, jQuery       | `DS.Adapter` (subclass-ok) or third-party
serialization        | manual, `parse`      | `DS.RESTSerializer` (subclass-ok) > `DS.JSONSerializer`
sharing data         | manual, n models     | `Controller.needs` to share controllers
skip url update      | not provided         | `location: 'none'`
undo                 | not provided         | `Record.rollback`

> As a legend for Ember, the names follow conventions. Dasherized names are for
Handlebars helpers. Camelized names are for properties and methods. Asterisked
names are for suffixes / prefixes.

> While Ember provides magic, most of its features seem to solve real pain points.
It favors convention over configuration: the framework automatically links its
components through an implicit set of default behaviors common to client-side
CRUD apps. It provides more structure and spells out more of the solution. The
benefit is the dev has less design decisions to make. The detriment is ability
to make less decisions can make the framework inflexible or upgrading difficult.

> From the above, it seems Ember relies heavily on custom Handlebars helpers. This
makes its templates very powerful, but still very declarative. It seems to draw
from and provide some of the benefits of Angular. Ember goes a step further in
baking in error and loading integration into each layer of the app. It also uses
promises throughout the networking and data layers to simplify async
development.

> As a side note on Backbone. It can supplement features not provided out of the
box with extensions. But if it was to and the extensions are proper, the
extensions would almost always be extending the base Backbone classes. This
requires your application to be extending from a different layer with a
different API. In general it is less likely the extensions will follow the same
API conventions, or even play well with each other. For example, you can't
combine two extensions' subclasses of `Backbone.Model` without mixing in their
methods and properties into your own class, which will likely lead to conflict
and less maintainability.

## Joga+1

Use more web components:

- x-location-autocomplete
- x-sport-select

## Conclusion

Ember feels like a full-featured framework akin to Rails and Symfony. It helps
us do more out of the box and get larger client-side apps out the door with less
of _our own_ code written than Backbone. But, like with Rails and Symfony, Ember
has a large surface area. This means it's not only more to learn but also more
to migrate. Moreover, doing anything outside of the established conventions may
not be straightforward. But, given we are fans of Symfony, it would make sense
that if the project required it, we would also find Ember as useful.

## Epilogue

- [Discussion between framework creators about differences][https://gist.github.com/jashkenas/1732351].
- [Proposed changes for 2014][http://emberjs.com/blog/2013/12/17/whats-coming-in-ember-in-2014.html].
