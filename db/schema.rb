# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160811140558) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer  "author_id",                         null: false
    t.string   "title",                             null: false
    t.text     "description"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.boolean  "direct",            default: false, null: false
    t.integer  "primary_user_id"
    t.integer  "secondary_user_id"
  end

  add_index "channels", ["author_id"], name: "index_channels_on_author_id", using: :btree
  add_index "channels", ["primary_user_id", "secondary_user_id"], name: "index_channels_on_primary_user_id_and_secondary_user_id", unique: true, using: :btree

  create_table "direct_channels", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "direct_channels", ["channel_id"], name: "index_direct_channels_on_channel_id", using: :btree
  add_index "direct_channels", ["user_id", "channel_id"], name: "index_direct_channels_on_user_id_and_channel_id", unique: true, using: :btree

  create_table "messages", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "user_id",    null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "user_channels", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_channels", ["channel_id"], name: "index_user_channels_on_channel_id", using: :btree
  add_index "user_channels", ["user_id", "channel_id"], name: "index_user_channels_on_user_id_and_channel_id", unique: true, using: :btree
  add_index "user_channels", ["user_id"], name: "index_user_channels_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
